#include <iostream>
using namespace std;

void main()
{
	int luku1;
	int luku2;
	cout << "Sy�t� luku1: ";
	cin >> luku1;
	cout << "Sy�t� luku2: ";
	cin >> luku2;

	if (luku1 == luku2)
		cout << "BINGO " << endl;
	else
		cout << "BONGO " << endl;
}