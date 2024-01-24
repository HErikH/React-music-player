import { render, screen, fireEvent } from "@testing-library/react"
import MusicUploadForm from './MusicUploadForm'

describe('Music upload form tests', () => {
    test('Initial render', () => { 
        render(<MusicUploadForm />)
        const form = screen.getByTestId('musicUploadForm')
        expect(form).toBeInTheDocument()
    })
    test('Upload click', async () => { 
        render(<MusicUploadForm />);
        
        const button = await screen.findByTestId('uploadButton');
        fireEvent.click(button);
    
        expect(screen.getByTestId('uploadStatus')).toBeInTheDocument();
    })
});