   M S B A M L   `   `   `  ����D  @summamove, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null%clr-namespace:summamove	summamove  5          summamove.Oefeningen   5      \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5      R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      )localclr-namespace:summamove     5      .��5      �   � ColumnDefinitions  5	      �� 5
   
   $
��20px �6   �� 5   
   $��1* �6   �� 5   
   $��1* �6   �� 5   
   $
��80px �6   �� 5   
   $
��20px �6    � RowDefinitions 5      �� 5   
   $
��20px �6   �� 5   
   $��1* �6   �� 5   
   $
��70px �6   �� 5   
   $��4* �6   �� 5   
   $��1* �6   �� 5   
   $
��20px �6   .+�5      �� $��1��6   $��1��6    $��3��6-   ���#24126e6B   �� 5      $��
Oefeningen��6   $��1��6"   $��1��62   $��2��6?    �� TextAlignment$ Center=�6U   $	��260��6l   $��Bottom=�6y   ���#fc0303$��40(�6�   $��340,0,272,14q�6�   &   System.Windows.Controls.DataGrid  5   
   $��1��6   $��2��6$   $��4��61   $��14(�6F      SelectionMode$ Single=�6U      CanUserAddRows .     AutoGenerateColumns .     
IsReadOnly . $��10,60,10,10q�6�   $��2��6�   ���#fc0303��6�   �� *Oefeningens+ �� SelectedItem 6  �� *SelectedOefeningens+   Columns 5   
   0  *System.Windows.Controls.DataGridTextColumn  5      ,  &System.Windows.Controls.DataGridColumn	   Header$	 ID��6:   1  +System.Windows.Controls.DataGridBoundColumn
   Binding
 6#   �� *ID+   ElementStyle 5      �� 5        �� 
TargetType" ��6   .�5!      ��  �� Property � �� �� Value$ 15(�65   6B   �� 5"       � ��$ Black"�67   6G   5#      5%        5&      $	  Naam ��6?      Width5  /System.Windows.Controls.DataGridLengthConverter$	 100 6O   
 6%   �� *Naam+ 5'      �� 5(      " ��6    .�5)      ��  � ��$ 15(�69   6F   �� 5*       � ��$ Black"�6;   6K   5+      5-      4  .System.Windows.Controls.DataGridTemplateColumn  5/         CellTemplate 50      �� 51      .R�52      ��  ��Name$ 
BTWijzigen��65   -   5        
�������.��53      �� $��Assets/Desktop_Icon.png��6$   $��30��6E   $��25��6Q   54      55      57        58       59      �� 5:      .R�5;      �� $ BTVerwijderen��65   -   5        
�������.��5<      �� $��Assets/Trash_Icon.png��6$   $��30��6C   $��25��6O   5=      5>      5A      5D      �� 5G      -   5        $��Center=�5G   $   $��Center=�6A   $��3��6\   $��2��6l   $��40��6{   $��30��6�   
�������
�������.��5H   
   �� $��15(�6   $	��Add��6"   $��40��6-   $��30��69   5I      5K      5L      