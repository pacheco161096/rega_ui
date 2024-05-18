import traslateCopy from './traslateCopy';

function traslateCopies (response) {
    const data = response.data;
    this.traslateCopy = data.map( item => new traslateCopy(item) )
   
}

export default traslateCopies;