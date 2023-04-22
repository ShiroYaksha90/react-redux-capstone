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
    <>

      {loading ? (<h1>Loading....Please Wait</h1>) : (
        <table className="main-container">
          {countriesArray.length > 0 && countriesArray.map((country) => (

            <td key={country.cca3}>
              <Link
                className="card"
                to={`/${country.cca3}`}
              >
                <img src={country.flags.png} alt={country.flags.alt} className="card-image" />
                <div className="info">
                  <h3>{country.name.common}</h3>
                  <p>
                    Continent:
                    {' '}
                    <span>{country.continents}</span>
                  </p>
                </div>
              </Link>
            </td>

          ))}
        </table>
      )}

    </>
  );
};

export default Content;
