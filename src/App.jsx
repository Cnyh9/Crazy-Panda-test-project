import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router';
import { MyContext } from './context/myContext';
import { MySlider } from './pages/MySlider';
import { Table } from './pages/Table';
import { Navbar } from './components/Navbar';

function App() {

    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)


    const handleDrawerClose = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const handleSearch = e => {
        setSearchValue(e.target.value)
    }

    const getComments = async () => {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/comments')
        const result = responce.data
        setComments(result)
        setIsLoading(true)
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div className="App">
            <MyContext.Provider value={{
                searchValue,
                handleSearch,
                comments,
                isLoading,
                isDrawerOpen,
                handleDrawerClose
            }}>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Table}/>
                    <Route path="/slider" component={MySlider}/>
                </Switch>
            </MyContext.Provider>
            
        </div>
    );
}

export default App;
