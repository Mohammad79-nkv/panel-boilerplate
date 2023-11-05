type TryCatchProps<T> = {
  tryFn: () => T;
  catchFn: (error: any) => T;
};
function tryCatch<T>({ tryFn, catchFn }: TryCatchProps<T>): T {
  try {
    return tryFn();
  } catch (error) {
    return catchFn(error);
  }
}
