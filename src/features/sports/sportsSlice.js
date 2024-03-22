import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const FAILED = 'failed';
export const LOADING = 'loading';
export const SUCCEEDED = 'succeeded';
export const IDLE = 'idle';
export const INITIAL = 'initial';

const initialState = {
    sports: [],
    activeSports: [],
    groups:{},
    status: {sports:IDLE,events:INITIAL},
    selectStore: {
        selected: 9,
        selectStoreArray: [],
        store:{}
    },
    selectedLeague:'',
    sportEvents:{},
    error : {sports:null,events:null}
}
/**
 * fetch sports and update them if last update is more than 3 hrs
 * https://api.the-odds-api.com/v4/sports/soccer_germany_bundesliga/events/9c7d75779144eba2e062ff7848984535/odds?apiKey=39b467eaa2bc2c2ad4dfc4eb3deb3e1e&regions=eu&regions=us&markets=spreads,h2h,totals,alternate_spreads,alternate_totals,btts,draw_no_bet,h2h_3_way,team_totals,alternate_team_totals,alternate_team_totals,h2h_q1,h2h_q2,h2h_q3,h2h_q4,h2h_h1,h2h_h2&bookmakers=onexbet
 */
export const fetchSports = createAsyncThunk('sports/fetchsports', async () => {
    let response = await axios.get('https://www.betkawa.com/api/sports')

    if (response.data) {
        if (response.data[0]) {
            let sinceUpdate = response.data[0]['updated_at']
            let difference = (new Date() - new Date(sinceUpdate)) / (1000 * 60 * 60);

            if (difference >= 3) { 
                let updateResponse = await axios.get('https://www.betkawa.com/api/updatesports');


                let sportResponse = await axios.get('https://www.betkawa.com/api/sports')

                return sportResponse.data
            }
        }
    }
    return response.data;
});

/**
 * fetch sport odds
 */

export const fetchSportEvents = createAsyncThunk(
    'sports/fetchsportevents', 
    async (sportkeys = [], thunkAPI) => { 
        let eventStore = {}
        for(const sportkey of sportkeys){
            try {

        const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${sportkey}/events?apiKey=39b467eaa2bc2c2ad4dfc4eb3deb3e1e`);

        eventStore[sportkey] = response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);

            }
        }
        
        return eventStore;
    }

    
  );
  


export const sportsSlice = createSlice({
    name: 'sports',
    initialState,
    reducers: {
        selectSport: (state, action) => {
            state.selectStore.selected = action.payload
        },
        selectLeague: (state, action) => {
            state.selectedLeague = action.payload
        }
        
    },
    extraReducers(builder) {
        builder
            .addCase(fetchSports.pending, (state, action) => {
            state.status.sports = LOADING
            })
            .addCase(fetchSports.fulfilled, (state, action) => {
                // console.log(action)
                
                state.sports = action.payload

                state.activeSports = state.sports.filter((sport) => sport.active == 1)
                
                let groupSet = new Set()
                for (let sport of state.activeSports) {
                    groupSet.add(sport.group)
                }
                let groups = {}
                for (let group of groupSet) {

                    groups[group] = []

                }
                for (let sport of state.activeSports) {
                    groups[sport.group].push(sport)
                }

                state.groups = groups
                const groupNamesArray = Object.keys(groups);

                const selectStore  = {}

                for (let name of groupNamesArray) {
                     if (name.toLowerCase().startsWith('soccer')) {
                         if ('Football' in selectStore) {
                             selectStore['Football'].push(groups[name])
                         } else {
                             selectStore['Football']= [groups[name]]
                         }            
                     } else {
                         selectStore[name]= [groups[name]]            
                     }       
                }
                const selectStoreArry = Object.keys(selectStore);
                const indexOfFootball = selectStoreArry.findIndex((a) => a == 'Football')

                state.selectStore.selectStoreArray = selectStoreArry;
                state.selectStore.store = selectStore;

                state.selectStore.selected = indexOfFootball;

                state.status.sports = SUCCEEDED
                state.status.events = IDLE
            })
            .addCase(fetchSports.rejected, (state, action) => {
                state.status.sports = FAILED
                state.error.sports = action.error.message
            })
            .addCase(fetchSportEvents.fulfilled, (state, action) => {
                console.log('====================== action', action.payload)
                state.sportEvents ={ ...state.sportEvents,...action.payload}
                state.status.events= SUCCEEDED
            })
            .addCase(fetchSportEvents.pending, (state, action) => {
            state.status.events = LOADING
            })
            .addCase(fetchSportEvents.rejected, (state, action) => {
                state.status.events = FAILED
                state.error.events= action.error.message
        })
    }
})

export default sportsSlice.reducer;
export const { selectSport,selectLeague } = sportsSlice.actions;
export const selectAllSports = (state) => state.sports.sports;
export const selectSportsStatus = (state) => state.sports.status;
export const selectSportsGroups = (state) => state.sports.groups;
export const subscribeToSelectStore = (state) => state.sports.selectStore;
export const selectSportEvents = (state) => state.sports.sportEvents
export const selectStatus = (state) => state.sports.status
export const selectError = (state) => state.spors.error
export const getSelectedLeague = (state)=> state.sports.selectedLeague