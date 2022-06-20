using summamove.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace summamove
{
    /// <summary>
    /// Interaction logic for Gebruikers.xaml
    /// </summary>
    public partial class Gebruikers : UserControl, INotifyPropertyChanged
    {
        #region PropertyChanged
        public event PropertyChangedEventHandler PropertyChanged;
        // Create the OnPropertyChanged method to raise the event
        // The calling member's name will be used as the parameter.
        protected void OnPropertyChanged([CallerMemberName] string name = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
        }
        #endregion

        #region Propertys

        SummaMoveDB dB = new SummaMoveDB();

        private ObservableCollection<Users> gebruiker = new ObservableCollection<Users>();
        public ObservableCollection<Users> Gebruikeres
        {
            get { return gebruiker; }
            set { gebruiker = value; }
        }

        private Models.Users selectedgebruiker;
        public Models.Users SelectedGebruiker
        {
            get { return selectedgebruiker; }
            set
            {
                selectedgebruiker = value; OnPropertyChanged();
            }
        }
        #endregion


        public Gebruikers()
        {
            InitializeComponent();
            LoadData();
            DataContext = this;
        }
        private void LoadData()
        {
            if (dB.GetAlleGebruikers() == null)
            {
                MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);
            }
            else
            {

                List<Users> Gebruiker = dB.GetAlleGebruikers();
                try
                {
                    Gebruikeres.Clear();
                    foreach (Users item in Gebruiker)
                    {
                        Gebruikeres.Add(item);
                    }
                }
                catch
                {
                    Gebruikeres.Clear();
                    MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);

                }
            }
        }
        private void Create_Click(object sender, RoutedEventArgs e)
        {
            GebruikerToevoegen gebruiker = new GebruikerToevoegen();
            gebruiker.ShowDialog();
            LoadData();

        }

        private void BTVerwijderen_Click(object sender, RoutedEventArgs e)
        {
            if (!dB.DeleteGebruiker((int)selectedgebruiker.ID))
            {
                MessageBox.Show("Er is een fout bij het verwijderen");
                return;
            };
            LoadData();
        }

        private void BTWijzigen_Click(object sender, RoutedEventArgs e)
        {
            Gebruikerwijzigen gebruiker = new Gebruikerwijzigen((int)selectedgebruiker.ID );
            gebruiker.ShowDialog();
            LoadData();
        }
    }
}
