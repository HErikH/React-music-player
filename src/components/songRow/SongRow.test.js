import { render, screen } from "@testing-library/react"
import SongRow from './SongRow'
import songsData from '../../data/songsData'

describe('Song Row tests', () => {
    test('Song data render', () => { 
        render(<SongRow songs={songsData} />);
        let row = screen.getByText(/no way back/i)
        expect(row).toBeInTheDocument();
    })
});