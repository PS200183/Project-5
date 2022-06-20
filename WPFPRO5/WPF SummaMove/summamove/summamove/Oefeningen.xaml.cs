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
using summamove.Models;
namespace summamove
{
    /// <summary>
    /// Interaction logic for Oefeningen.xaml
    /// </summary>
    public partial class Oefeningen : UserControl, INotifyPropertyChanged
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

        private ObservableCollection<Oefeningens> oefeningen = new ObservableCollection<Oefeningens>();
        public ObservableCollection<Oefeningens> Oefeningens
        {
            get { return oefeningen; }
            set { oefeningen = value; }
        }

        private Models.Oefeningens selectedoefeningen;
        public Models.Oefeningens SelectedOefeningens
        {
            get { return selectedoefeningen; }
            set
            {
                selectedoefeningen = value; OnPropertyChanged();
            }
        }
        #endregion

        public Oefeningen()
        {
            InitializeComponent();
            LoadData();
            DataContext = this;
        }

        private void LoadData()
        {
            if (dB.GetOefeningens() == null)
            {
                MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);
            }
            else
            {

                List<Oefeningens> oefeningen = dB.GetOefeningens();
                try
                {
                    Oefeningens.Clear();
                    foreach (Oefeningens item in oefeningen)
                    {
                        Oefeningens.Add(item);
                    }
                }
                catch
                {
                    Oefeningens.Clear();
                    MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);

                }
            }
        }

        private void Create_Click(object sender, RoutedEventArgs e)
        {
            OefeningensToevoegen oefeningens = new OefeningensToevoegen();
            oefeningens.ShowDialog();
            LoadData();
        }

        private void BTVerwijderen_Click(object sender, RoutedEventArgs e)
        {
            if (!dB.DeleteOefeningensById((int)selectedoefeningen.ID))
            {
                MessageBox.Show("Er is een fout bij het verwijderen");
                return;
            };
            LoadData();
        }

        private void BTWijzigen_Click(object sender, RoutedEventArgs e)
        {
            Oefeningenswijzigen oefeningens = new Oefeningenswijzigen((int)selectedoefeningen.ID);
            oefeningens.ShowDialog();
            LoadData();
        }
    }
}
