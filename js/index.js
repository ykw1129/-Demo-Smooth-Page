import Highway from '@dogstudio/highway';
import Fade from './transtion';

const H = new Highway.Core({
    transitions:{
        default:Fade
    }
});
