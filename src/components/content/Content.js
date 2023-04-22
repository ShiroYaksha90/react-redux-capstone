import './content.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries, searachByRegion } from '../../redux/features/countriesSlice';

const Content = () => {
  const {
    countriesArray, loading, success, region,
  } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    if (region !== '') {
      dispatch(searachByRegion(region));
    } else { dispatch(getCountries()); }
  }, [dispatch, success, region]);

  return (
    <section className="main-container">
      {loading ? (<h1>Loading....Please Wait</h1>) : (
        countriesArray.length > 0 && countriesArray.map((country) => (
          <Link
            className="card"
            key={country.cca3}
            to={`/${country.cca3}`}
          >
            <img src={country.flags.png} alt={country.flags.alt} className="card-image" />
            <div className="info">
              <h3>{country.name.common}</h3>
              <p>
                Area:
                {' '}
                <span>
                  {country.area}
                  {' '}
                  Km
                  <sup>2</sup>
                </span>
              </p>
              <p>
                Continent:
                {' '}
                <span>{country.continents}</span>
              </p>
              <p>
                Capital:
                {' '}
                <span>{country.capital}</span>
              </p>
            </div>
          </Link>

        )))}
    </section>
  );
};

export default Content;
