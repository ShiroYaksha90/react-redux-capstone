import countriesReducer, {
  initialState, getCountries, search, searachByRegion, getRegion,
} from '../redux/features/countriesSlice';

describe('countriesSlice reducers', () => {
  it('should return the initial state', () => {
    expect(countriesReducer(initialState, {})).toEqual({
      loading: false,
      countriesArray: [],
      countryInfo: [],
      region: '',
      error: false,
      success: false,
    });
  });

  it('Testing getRegion reducer', () => {
    const state = countriesReducer(initialState, getRegion('Asia'));
    expect(state.region).toBe('Asia');
  });

  it('Testing getCountries extrareducer', () => {
    const payload = [{ name: 'Country1' }, { name: 'Country2' }];
    const state = countriesReducer(initialState, getCountries.fulfilled(payload));
    expect(state.loading).toBe(false);
    expect(state.countriesArray).toEqual(payload);
    expect(state.success).toBe(true);
  });

  it('Testing search extrareducer', () => {
    const payload = { name: 'Country1' };
    const state = countriesReducer(initialState, search.fulfilled(payload));
    expect(state.loading).toBe(false);
    expect(state.countryInfo).toEqual(payload);
    expect(state.error).toBe(false);
    expect(state.success).toBe(true);
  });

  it('Testing searachByRegion extrareducer', () => {
    const payload = [{ name: 'Country1' }, { name: 'Country2' }];
    const state = countriesReducer(initialState, searachByRegion.fulfilled(payload));
    expect(state.loading).toBe(false);
    expect(state.countriesArray).toEqual(payload);
    expect(state.success).toBe(true);
  });
});
