import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { groupByCategory } from '../../helper/grouping';
import { CategoryMovies, headerType } from '../../type';
import notFound from '../../assets/not-found.png'
import Loader from '../../assets/Loading_icon.gif'
import "./styles.css";

const Listing = ({ searchData }: headerType) => {
    const [apiData, setApiData] = useState<CategoryMovies[]>()

    useEffect(() => {
        if (searchData) {
            setApiData(groupByCategory(searchData))
        } else {
            axios.get(process.env.REACT_APP_API_ENDPOINT as string, { headers: { "Authorization": "Bearer Wookie2021" } })
                .then((res) => setApiData(res.data.movies && groupByCategory(res.data.movies)))
        }
    }, [searchData])

    return (
        <section className='listing-section'>
            <div className='container'>
                <ul className='movieList' style={{ display: "flex", flexDirection: "column" }}>
                    {apiData ? apiData.length ? apiData.map((categoryMovie) => (
                        <li key={categoryMovie.category}>
                            <h3>{categoryMovie.category}</h3>
                            <div className='listWrapper'>
                                {categoryMovie.movies.map((movie) => (
                                    <Link key={movie.id} to={`/${movie.id}`}>
                                        <div className='movieBlock'>
                                            <img src={movie?.backdrop} alt="image" height='300px' width='350px' />
                                            <h5>{movie.title}</h5>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </li>
                    )) :
                        <img src={notFound} alt="" />
                        :
                        <div className='loaderWrapper'>
                            <img src={Loader} alt="loader" className='loader' />
                        </div>
                    }
                </ul>
            </div>
        </section>
    )
}

export default Listing