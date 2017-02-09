import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Mousetrap from 'mousetrap';
import EmojiPane from 'emoji-pane';

const keyCombo = 'ctrl+space';
const mountId = 'emoji-keyboard';
let mount, mounted = false;

const mountKeyboard = function() {
  render(<EmojiPane />, mount);
  console.log('mounted');
};

const unmountKeyboard = function() {
  unmountComponentAtNode(mount);
  console.log('unmounted');
};

const insertMount = function() {
  mount = document.createElement('div');
  mount.setAttribute('id', mountId);
  document.body.appendChild(mount);
  console.log('mount in dom');
};

const toggleKeyboard = function() {
  if(mounted) {
    unmountKeyboard();
  } else {
    mountKeyboard();
  }
  mounted = !mounted;
};

const initialize = function() {
  Mousetrap.bind(keyCombo, toggleKeyboard);
  console.log('keys bound');
};

initialize();
