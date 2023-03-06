import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ListingProps } from '../../type'
import Loader from '../../assets/Loading_icon.gif'
import './styles.css';
import ReactStars from 'react-stars'

const Details = () => {
    const [detailsData, setDetailsData] = useState<ListingProps[]>()

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_ENDPOINT as string, { headers: { "Authorization": "Bearer Wookie2021" } })
            .then((res) => setDetailsData(res.data.movies?.filter((item: ListingProps) => item.id === window.location.pathname.split("/").at(-1))))
    }, [])



    return (
        <>
            <div className='backBtnWrapper'>
                <Link to="/">Back</Link>
            </div>
            {detailsData?.length ?
                <div className='movieDetail'>
                    <div className='imgWrapper'>
                        <img src={detailsData[0]?.poster} alt="image" height='auto' width='550px' />
                    </div>
                    <div className='detailContent'>
                        <h3 className='star-rating'>{detailsData[0]?.title}{'(' + detailsData[0]?.imdb_rating + ')'}
                            <ReactStars
                                count={5}
                                size={45}
                                edit={false}
                                value={detailsData[0]?.imdb_rating / 2}
                                color2={'#ffd700'} />
                        </h3>
                        <p>year: {detailsData[0]?.released_on.toString().slice(0, 7)} | length: {detailsData[0]?.length} | director: {detailsData[0]?.director}</p>
                        <p className='bottomSpace'>cast: {detailsData[0]?.cast.join(', ')}</p>
                        <p>Movie Description: {detailsData[0]?.overview}</p>
                    </div>
                </div>
                :
                <div className='loaderWrapper'>
                    <img src={Loader} alt="loader" className='loader' />
                </div>
            }
        </>
    )
}

export default Details