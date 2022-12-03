import React, { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';

import { useDebounce } from 'use-debounce';


export default function useQuery(query) {

    const [searches, setSearches] = useState([]);
    const [value] = useDebounce(query, 500);

    useEffect(() => {

        let isActive = true;
        if (value) {
            BooksAPI.search(value).then(data => {
                if (data.error) {
                    setSearches([])
                } else {
                    if (isActive) {
                        setSearches(data);
                    }
                }
            })
        }

        return () => {
            isActive = false;
            setSearches([])
        }

    }, [value])


    return [searches, setSearches];

}