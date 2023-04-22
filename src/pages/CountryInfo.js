import "./countryInfo.css";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/features/countriesSlice";
import { BiArrowBack } from "react-icons/bi";

const CountryInfo = () => {
  const { loading, countryInfo } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { code } = useParams();
  useEffect(() => {
    if (code) {
      dispatch(search(code.toLowerCase()));
    }
  }, [dispatch, code]);
  return (
    <section className="details-container">
      <Link to="/">
        <BiArrowBack />
      </Link>
      <div className="details-content">
        {loading ? (<h1>Loading....Please Wait</h1>) : countryInfo.length > 0 ? (
          <>
            <img
              src={countryInfo[0].flags.png}
              alt="name"
              className="details-image"
            />

            <div className="right">
              <h3>{countryInfo[0].name.common}</h3>
              <div className="details">
                <div className="info-left">
                  <p>
                    Offcial Name: <span>{countryInfo[0].name.official}</span>
                  </p>
                  <p>
                    Population: <span>{countryInfo[0].population}</span>
                  </p>
                  <p>
                    Contenint: <span>{countryInfo[0].continents}</span>
                  </p>

                  <p>
                    Time Zones: <span>{countryInfo[0].timezones[0]}</span>
                  </p>
                  <p>
                    Capital: <span>{countryInfo[0].capital}</span>
                  </p>
                </div>

                <div className="info-right">
                  <p>
                    Currencies: <span>
                      {Object.values(countryInfo[0].currencies)
                        .map((item) => {
                          return item.name;
                        })
                        .join(", ")}
                    </span>
                  </p>

                  <p>
                    Languages:  <span>
                      {Object.values(countryInfo[0].languages)
                        .map((item) => {
                          return item;
                        })
                        .join(", ")}
                    </span>
                  </p>
                </div>
              </div>

              <div className="border">
                <p>
                  Border Countries:
                  {countryInfo[0].borders ? (
                    countryInfo[0].borders.map((item, id) => {
                      return (
                        <Link className="borders-links" to={`/${item}`} key={id}>
                          {item}
                        </Link>
                      );
                    })
                  ) : (
                    <span>No Boreder Countries</span>
                  )}
                </p>
              </div>
            </div>
          </>
        ) : (
          <h1>No Info Found</h1>
        )}
      </div>
    </section>
  );
};

export default CountryInfo;
