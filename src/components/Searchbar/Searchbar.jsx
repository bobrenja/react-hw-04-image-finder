import { Component } from 'react';
import style from './Searchbar.module.scss'
class Searchbar extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    search: '',
  };

  handleInput = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSubmit = (e) =>{
    e.preventDefault();
    const {onSubmit} = this.props;
    onSubmit({...this.state});
    this.setState({search:''})
  }

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value = {this.state.search}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
