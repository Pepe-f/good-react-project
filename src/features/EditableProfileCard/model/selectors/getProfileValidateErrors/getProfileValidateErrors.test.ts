import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  test('Should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.NO_DATA,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.NO_DATA,
    ]);
  });
  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
