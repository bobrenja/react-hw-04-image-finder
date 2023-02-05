import { useState } from 'react';
import style from './Searchbar.module.scss';

const Searchbar = ({ onSubmitForm }) => {
  const [search, setSearch] = useState('');

  const handleInput = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitForm(search);
    setSearch('');
  };

  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInput}
          value={search}
        />
      </form>
    </header>
  );
};
export default Searchbar;
