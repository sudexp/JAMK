#include <iostream> 
using namespace std;

int summa(int a, int b);
void summa2(int a, int b);

int main()
{
	int x = 5;
	int y = 10;
	summa2(x, y);
}

int summa(int a, int b) {
	return a + b;
}

void summa2(int a, int b) {
	cout << a + b;
}
