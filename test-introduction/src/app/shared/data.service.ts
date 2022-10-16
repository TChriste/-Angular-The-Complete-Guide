export class DataService {
  getDestails(): PromiseLike<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });
  }
}
