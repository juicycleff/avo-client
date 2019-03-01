import React from 'react';
import CrystallizeLayout, { LayoutContext } from '@crystallize/react-layout';

import { Header } from 'components/organism/header';
import { Drawer } from 'components/organism/drawer';
import { Cart } from 'components/organism/cart';
import { Footer } from 'components/organism/footer';
import { Content } from './styles';

class Layout extends React.PureComponent {
  render() {
    const { children, noPadding } = this.props;

    return (
      <CrystallizeLayout left={Drawer} right={Cart}>
        <main>
          <LayoutContext.Consumer>
            {({ state, actions }) => (
              <Header state={state} actions={actions} kind="light" />
            )}
          </LayoutContext.Consumer>
          {noPadding ? children
          : (
            <Content>
              {children}
            </Content>
          )}
          <Footer kind="light" />
        </main>
      </CrystallizeLayout>
    );
  }
}

export default Layout;
/*
div>
                        <div>Left shown? {state.leftShown ? 'yes' : 'no'}</div>
                        <div>
                            Right shown? {state.rightShown ? 'yes' : 'no'}
                        </div>
                        <div>Content pushed: {state.contentPushed}</div>
                        <button onClick={actions.showLeft}>Show left menu</button>
                        <button onClick={actions.showRight}>Show right menu</button>
                    </div
                    */
