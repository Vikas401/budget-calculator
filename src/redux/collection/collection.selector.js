// import { createSelector } from 'reselect';

// const selectCollection = state => state.collection;

// export const selectCollections = createSelector(
//     [selectCollection],
//     collection => collection.collections 
// );
// export const selectCollectionForPreview = createSelector(
//     [selectCollections],
//     collections => collections ? Object.keys(collections).map(key => collections[key]) : []
// );



// export const selectIncomeCollectionTotal = createSelector(
//     [selectCollections],
//     collections => collections.reduce(
//         (result, collection) => 
//             (collection.value === '+' ? result + parseInt(collection.amounts) : result), 0
           
//     )

// );
// export const selectExpanseCollectionTotal = createSelector(
//     [selectCollections],
//     collections => collections.reduce(
//         (result, collection) => 
//         (collection.value === '-' ? result + parseInt(collection.amounts) : result), 0
          
//     )
// );
