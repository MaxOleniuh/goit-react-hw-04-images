import { Component } from "react";
import {SearchbarStyled, FormStyled, ButtonStyled, InputStyled} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';
class Searchbar extends Component {
  state = {
    input: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // if (this.state.input.trim() === '') return;
    this.props.setQuery(this.state.input);
    this.setState({input: ''})
  };

  render() {
    return (   
    <SearchbarStyled>
  <FormStyled onSubmit={this.handleSubmit}>
    <ButtonStyled type="submit" className="button">
      <FcSearch size='2em'/>
    </ButtonStyled>
             <InputStyled
      onChange={(e) => this.setState({ input: e.target.value })}
      value={this.state.input}
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    </FormStyled>
</SearchbarStyled>
    );
  }
}

export default Searchbar;
// FcSearch