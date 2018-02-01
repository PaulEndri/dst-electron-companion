// @flow
import React, { Component } from 'react';
import BaseView from '../_baseView/baseView';

const Waiter = (props, context) => {
  return (
    <BaseView {...props} {...context} waiter={true} />
  );
}

export default Waiter;