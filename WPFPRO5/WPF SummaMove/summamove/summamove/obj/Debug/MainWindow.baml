   M S B A M L   `   `   `  ����D  @summamove, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null%clr-namespace:summamove	summamove  5   	       summamove.MainWindow   5   	   \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   )localclr-namespace:summamove     5   	   -   5          �Name$  DashboardWindow��5
   	    � Title$ 
MainWindow��5   	    � WindowState$ 	Maximized=�5	   	    � WindowStartupLocation$ CenterScreen=�5   	    � WindowStyle$
 None=�5   	    � 
ResizeMode$ NoResize=�5   	   
������ $
��1000��5   
   $
��1500��6    � AllowsTransparency . .��5      � .+�5!   
   �� ���#ECF0F1 �� CornerRadius$ 10��5"      �� 5&   
   ���#d70096$	��Top=�5'      $
��Left=�5(      $ 
10,0,100,0��5)      $��80��5*      $
��1000��5+      ._�5-      �� $��	SUMMAMOVE��6      HeaderStyle#��[  5.      50      �� 54   
   ���#d70096$��Bottom=�55      $��Right=�56      $ 
100,0,10,0��57      $��80��58      $
��1000��59      5<      �� 5@   
   ���#24126e���#FFFFFF$��0,5,0,5q�5B      $	��900��5C      $��0,10,0,0q�5D      $ 25��5E      � 5I   
    � ColumnDefinitions 5K      �� 5M      $��25 �6#   �� 5N      $��2* �6#   �� 5O      $��1* �6#   �� 5P      $��6* �6#   �� 5Q      $��6* �6#   �� 5R      $��90 �6#   	 � RowDefinitions	 5V      �� 5X      $��0 �6    �� 5Y      $��1* �6    �� 5Z      $��1* �6    �� 5[      $��5* �6    �� 5\      $��5* �6    �� 5]      $��0 �6    .+�5`      � $��3��6   $��1��5a      $��0,10,0,0q�5b      .+�5e      �� -   5        
 ��Name$
 ListViewMenu��5e      ���#fc0303���#24126e$��Disabled=�6[   ���#24126e$��30(�6�   .@�5i      �� -   5         ��Name$ ItemGebruikers��5i   #   $��60��6;   .��5j      ��  �� Orientation$ 
Horizontal=�6%   .+�5l      �� $��
Gebruikers��6(   $��Center=�6:   $��20 10q�6U   5m      5n      �� 5p      -   5        $ ItemOefening��5p   #   $��60��69   .��5q      �� $ 
Horizontal=�6%   .+�5t      �� $��Oefeningen ��6(   $��Center=�6;   $��20 10q�6V   5u      5v      5w      5x      � 5|      -   5         �Name$ 
GDgegevens��5�   ,   $��3��5|      $��3��5}      $��2��5~      $��2��5      
������ 5�   ,   5�      �� 5�   
   -   5         ��Name$ Poweroff��5�      $��50��5�      $��50��5�      $��Right=�5�      $	��Top=�5�      $��0,5,20,0q�5�        CloseBtn_Style#��[ 5�      69   5�      5�      