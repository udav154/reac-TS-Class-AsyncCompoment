import { Component, ComponentType } from 'react';

type AsyncComponentProps = any

type AsyncComponentState = {
  component: ComponentType<any> | null;
};

const asyncComponent = (importComponent: () => Promise<{ default: ComponentType<any> }>) => {
  return class extends Component<AsyncComponentProps, AsyncComponentState> {
    constructor(props: AsyncComponentProps) {
      super(props);
      this.state = {
        component: null,
      };
    }
    componentDidMount() {
      importComponent().then((cmp) => {
        this.setState({ component: cmp.default });
      });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
