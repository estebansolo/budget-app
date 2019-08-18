// sudo npm install -D enzyme enzyme-adapter-react-16 raf enzyme-to-json
import DotEnv from 'dotenv'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
	adapter: new Adapter()
});

DotEnv.config({path: '.env.test'})