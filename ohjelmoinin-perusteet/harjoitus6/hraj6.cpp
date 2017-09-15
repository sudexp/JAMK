#include <iostream> 
using namespace std;
int main()
{
	int luku1;
	cout << "Kuinka paljon rahaa lompakossa sinulla on? ";
	cin >> luku1;
	int luku2;
	cout << "Kuinka paljon rahaa lihapiirakka maksaa? ";
	cin >> luku2;
	if (luku1 < luku2)
		cout << "Rahaa ei ole riittävää. Sinulla pitää paastota. ";
	else if (luku1 == luku2)
		cout << "Ole hyvä pirakka. Lompakko on tyhja. ";
	else
	{
		int erotus = luku1 - luku2;
		cout << "Nyt lompakossa jäljellä rahaa: " << erotus;
	}
	return 0;
}