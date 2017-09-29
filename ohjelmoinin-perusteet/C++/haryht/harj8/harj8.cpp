/******************************************
Tehtävä: Harjoitus 8 (palautus vko 41)
Tekija: Sklyarov Dmitry
Kuvaus:
Tee ohjelma, joka tulostaa annetut kolme lukua suuruus -
järjestyksessä(pienimmästä suurimpaan) näytölle
(katso harj. 1 suunnitelma)
a) käytä kokonaislukuja
b) käytä liukulukuja(= reaalilukuja)

•	ALKU
•	Anna luvut l1 l2 l3
•	JOS (l1>l2)
o	JOS (l2>l3)
	Tulosta (l3l2l1)
o	MUUTEN
	JOS (l1>l3)
•	Tulosta (l2l3l1)
	MUUTEN
•	Tulosta (l2l1l3)
•	MUUTEN
o	JOS (l1>l3)
	Tulosta (l3l1l2)
o	MUUTEN
	JOS (l2>l3)
•	Tulosta (l1l3l2)
	MUUTEN
•	Tulosta (l1l2l3)

Pvm: 22.9.2017
Versio: 1.0
*****************************************/

#include <iostream> 
using namespace std;
int main(void)
{
	int luku1;
	int luku2;
	int luku3;

	cout << "Anna luku 1" << endl;
	cin >> luku1;
	cout << "Anna luku 2" << endl;
	cin >> luku2;
	cout << "Anna luku 3" << endl;
	cin >> luku3;

	if (luku1>luku2)
	{
		if (luku2>luku3)
		{
			cout << luku3 << endl << luku2 << endl << luku1 << endl;
		}

		else
			if (luku1>luku3)
			{
				cout << endl << luku2 << endl << luku3 << luku1 << endl;
			}
			else
			{
				cout << endl << luku2 << endl << luku1 << endl << luku3 << endl;
			}
	}
