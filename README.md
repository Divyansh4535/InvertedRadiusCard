# Inverted Card Component

This project is a React component that displays an inverted card. The card flips to reveal additional information when hovered over.

## Features

- Inverted card flip animation
- Customizable front and back content
- Responsive design

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/invertedcard.git
    ```
2. Navigate to the project directory:
    ```bash
    cd invertedcard
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Import the `InvertedCard` component into your React project:
    ```javascript
    import InvertedCard from './components/InvertedCard';
    ```
2. Use the `InvertedCard` component in your JSX:
    ```javascript
    function App() {
        return (
            <div className="App">
                <InvertedCard
                    frontContent={<div>Front Content</div>}
                    backContent={<div>Back Content</div>}
                />
            </div>
        );
    }
    3. Preview this component:

    ![Inverted Card Preview](https://user-images.githubusercontent.com/yourusername/invertedcard-preview.png)


## Props

| Prop Name     | Type     | Description                       |
|---------------|----------|-----------------------------------|
| `frontContent`| `node`   | Content to display on the front   |
| `backContent` | `node`   | Content to display on the back    |

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.


"# InvertedRadiusCard" 
