import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    sports: [],
    activeSports: [],
    groups:{},
    status: 'idle',
    selectStore: {
        selected: 9,
        selectStoreArray: [],
        store:{}
    },
    error : null
}

export const fetchSports = createAsyncThunk('sports/fetchsports', async () =>{
    let response = await axios.get('https://www.betkawa.com/api/sports')
    // console.log(response)
    return response.data;
})
export const sportsSlice = createSlice({
    name: 'sports',
    initialState,
    reducers: {
        selectSport: (state, action) => {
            state.selectStore.selected = action.payload
        }
        
    },
    extraReducers(builder) {
        builder
            .addCase(fetchSports.pending, (state, action) => {
            state.status = 'loading'
            })
            .addCase(fetchSports.fulfilled, (state, action) => {
                // console.log(action)
                
                state.sports = action.payload
                // console.log(state.sports)
                // for (let sport of state.sports) {
                //     console.log(sport.group,'    ____   ',sport.details)
                // }
                
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

                state.status = 'succeeded'
            })
            .addCase(fetchSports.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
        })
    }
})

export default sportsSlice.reducer;
export const { selectSport } = sportsSlice.actions;
export const selectAllSports = (state) => state.sports.sports;
export const selectSportsStatus = (state) => state.sports.status;
export const selectSportsGroups = (state) => state.sports.groups;
export const subscribeToSelectStore = (state) => state.sports.selectStore;