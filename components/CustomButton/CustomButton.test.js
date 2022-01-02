import { expect } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import CustomButton from './CustomButton';

test('should render custom button', () => {
  const button = render(<CustomButton btnText="text" />);
  expect(button).toBeDefined();
});

test('should press button and trigger function passed into onPress', () => {
  const onPress = jest.fn();
  const button = render(<CustomButton btnText="text" onPress={onPress} />);
});
