import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, CardActions, CardMedia, CardTitle, FlatButton, FontIcon } from 'material-ui';
import { pink500, pink800, pinkA200 } from 'material-ui/styles/colors';

const ItemWrap = styled(Card)`
  box-shadow: none !important;
  margin: 1em;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  width: 270px;
  border: 1px solid transparent;
  &:hover{
    border: 1px solid #eee;
    box-shadow: 1px 3px 4px 0px rgba(144,144,144,0.44), 0px 0px 2px rgba(144,144,144,1) !important;
  }
`;

const AddCart = styled(FlatButton)`
  &:hover{
    ${props => (!props.disabled ? `
      color: #fff !important;
      font-weight: bold;
      background-color: ${pinkA200} !important;
    ` : '')}
    > div{
      color: #fff !important;      
      > span{
        color: #fff !important;      
      }
    }
  }
`;

const soldOutColor = pink500;

const SoldOut = styled.span`
  background: ${soldOutColor};
  color: #fff;
  position: absolute;
  z-index: 2;
  padding: 8px;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: calc(100% + 16px);
  transform: translate(-16px, 0%);
  &:after, &:before{
    content: '';
    position: absolute;
    top: 99%;
    left: 0;
    border: solid transparent;

  }
  &:after{
    border-width: 8px;
    border-right-color: ${soldOutColor};
    border-top-color: ${soldOutColor};
  }
`;

const CrossSoldOut = styled.span`
    background: ${soldOutColor};
    color: #fff;
    position: absolute;
    z-index: 1;
    padding: 15px;
    margin: 0 auto;
    top: 20%;
    left: 0px;
    width: calc(140% + 10px);
    -webkit-transform: translate(-16px,0%);
    -ms-transform: translate(-16px,0%);
    transform: translate(-12%,40%) rotate(40deg);
    text-align: center;
`;


class ProductItem extends Component {
  displaySoldOut = () => {
    const { isSoldOut } = this.props;

    if (isSoldOut) {
      return (
        <CrossSoldOut>
          Sold out
        </CrossSoldOut>);
    }
    return null;
  };

  render() {
    const {
      name, price, url, isSoldOut,
    } = this.props;
    return (
      <ItemWrap
        containerStyle={{
          margin: '0 auto',
        }}
      >
        {this.displaySoldOut()}
        <CardMedia
          style={{
            borderBottomStyle: 'solid',
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
            width: 250,
            padding: 10,
            height: 250,
            opacity: isSoldOut ? '0.4' : '1',
          }}
        >
          <img src={url} alt="" />
        </CardMedia>
        <CardTitle
          title={name}
          titleStyle={{
            fontSize: 20,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          subtitleStyle={{
            fontSize: 18,
          }}
          subtitle={price ? `${price} ₹` : ''}
        />
        <CardActions>
          <AddCart
            onClick={() => alert('Add to Cart')}
            fullWidth
            disabled={isSoldOut}
            rippleColor={pink800}
            labelPosition="before"
            secondary
            label="Add to Cart"
            icon={<FontIcon className="material-icons">add_shopping_cart</FontIcon>}
          />

        </CardActions>
      </ItemWrap>
    );
  }
}

ProductItem.defaultProps = {
  isSoldOut: false,
};


ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isSoldOut: PropTypes.bool,
};

export default ProductItem;