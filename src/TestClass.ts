export class TestClass{
    test(): void{
        console.log('Test');
    }
}


export interface ITestClass{
    test(): Promise<string>;
}