using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using summamove.Models;
namespace summamove
{
    /// <summary>
    /// Interaction logic for Gebruikerwijzigen.xaml
    /// </summary>
    public partial class Gebruikerwijzigen : Window
    {
        int id = 0;
        public Gebruikerwijzigen(int ID)
        {
            InitializeComponent();
            id = id + ID;
            LoadData();
        }

        SummaMoveDB dB = new SummaMoveDB();
        private void LoadData()
        {
            if (dB.getGebruikerBYID(id) == null)
            {
                MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);

            }
            else
            {

                Users Gebruiker = dB.getGebruikerBYID(id);
                TBName.Text = Gebruiker.Name;
                TBEmail.Text = Gebruiker.Email;

            }

        }
        private void BTWijzigen_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                if (!dB.UpdateGebruiker(id, TBName.Text, TBEmail.Text))
                {
                    MessageBox.Show("Er is een fout bij het update");
                    return;
                }
                this.Close();
            }
            catch
            {
                MessageBox.Show("Er is een fout bij het update");
            }
        }
    }
}
