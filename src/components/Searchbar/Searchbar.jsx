import { Component } from 'react';

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
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
