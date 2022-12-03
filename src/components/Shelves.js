import React from 'react';
import Shelf from './Shelf';


const Shelves = ({books, shelfUpdate}) => {

    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    const toBeRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");

    return (
        <div>
            <Shelf title="Currently Reading" books={currentlyReading} shelfUpdate={shelfUpdate}/>
            <Shelf title="Want To Read" books={toBeRead} shelfUpdate={shelfUpdate}/>
            <Shelf title="Read" books={read} shelfUpdate={shelfUpdate}/>
        </div>
    )

}

export default Shelves;