import '../../../index.css';
import { createBoard } from '@wixc3/react-board';
import { Label } from '../../../components/label/label';

export default createBoard({
    name: 'Label',
    Board: () => <Label> My Label </Label>,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 215,
        canvasHeight: 46,
    },
});
