#include <iostream>
using namespace std;
// vakioden m‰‰rittely
#define MINIMI 10 // vanha, EI suositeltava tapa m‰‰ritell‰ vakioita
const int MAKSIMI = 20; // uusi, suositeltava tapa

						// muuttujien esitelly
int summa;

// aliohjelmien esitelly
void Laske(int, int);

void main() // p‰‰ohjelma alkaa
{
	int luku1 = 2;
	int luku2;
	cout << "Syˆt‰ luku: ";
	cin >> luku2;
	summa = luku1 + luku2;
	//Laske(luku1, luku2);
	if (summa < MINIMI)
		cout << "Summa on pienempi kuin " << MINIMI;
	if (summa > MAKSIMI)
		cout << "Summa on suurempi kuin " << MAKSIMI;
	if (summa > MINIMI && summa < MAKSIMI)
		cout << "Summa on MINIMIN ja MAKSIMIN v‰liss‰ " << MINIMI << -MAKSIMI;
	if (summa == MINIMI)
		cout << "Summa on yht‰ kuin MINIMI " << MINIMI;
	if (summa == MAKSIMI)
		cout << "Summa on yht‰ kuin MAKSIMI " << MAKSIMI;
}

/*void Laske(int eka, int toka)
{
summa = eka + toka;
} */