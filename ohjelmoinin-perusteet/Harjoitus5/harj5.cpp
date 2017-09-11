#include <iostream>
using namespace std;

int main()
{
	int luku1;
	int luku2;
	cout << "Syötä luku1: ";
	cin >> luku1;
	cout << "Syötä luku2: ";
	cin >> luku2;

	if (luku1 == luku2)
		cout << "BINGO " << endl;
	else
		cout << "BONGO " << endl;
}