import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { headerType } from '../../type'
import debounce from 'lodash.debounce'
import './styles.css'
import search from '../../assets/search-icon.jpg'

const Header = ({ setSearchData }: headerType) => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const debounceLoadData = useCallback(debounce((value: string) =>
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}?q=${value}` as string, { headers: { "Authorization": "Bearer Wookie2021" } })
      .then((res) => setSearchData(res.data.movies)), 1000), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value)
    debounceLoadData(value);
  }

  return (
    <header className='header'>
      <Link to="/" className='brand-logo'>WOOKIE<br></br>MOVIES</Link>
      <div className='searchForm'>
        <form>
          <img src={search} alt='search icon' height='30px' width='30px' />
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>
    </header>
  )
}

export default Header