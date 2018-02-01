// @flow
import React, { Component } from 'react';
import BaseView from '../_baseView/baseView';

const Vanilla = (props, context) => {
  return (
    <BaseView {...props} {...context} waiter={false} />
  );
}

export default Vanilla;