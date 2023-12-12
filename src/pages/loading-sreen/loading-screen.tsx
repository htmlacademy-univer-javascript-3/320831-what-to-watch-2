import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className='loading-container'>
      <div className="lds-roller">
        <div /><div /><div /><div /><div /><div /><div /><div />
      </div>
    </div>
  );
}

export default LoadingScreen;
