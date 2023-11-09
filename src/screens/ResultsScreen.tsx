import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamNavigator } from '../navigator/NavigatorApp';
import { BarChart } from 'react-native-chart-kit';
import { resultStyles } from '../themes/ResultsTheme';
import axios from 'axios';

type EmployeeData = {
  email: string;
  nameEmployee: string;
};

type DepartmentData = {
  id: number;
  departament: string;
  employees: EmployeeData[];
};

interface Props extends NativeStackScreenProps<StackParamNavigator> { }

export const ResultsScreen = ({ navigation }: Props) => {
  const [departments, setDepartments] = useState<DepartmentData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<DepartmentData[]>('http://192.168.4.41:8080/api/departament');
      console.log('Data from API:', response.data);
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const countEmployeesByDepartment = (employees: EmployeeData[]) => employees.length;

  const data = {
    labels: departments.map((dep) => dep.departament),
    datasets: [
      {
        data: departments.map((dep) => countEmployeesByDepartment(dep.employees)),
      },
    ],
  };

  const renderItem = ({ item }: any) => (
    <View style={resultStyles.listItem}>
      <View >
        <Text style={resultStyles.departmentName}>{item.departament}</Text>
      </View>
      <View >
        <Text style={resultStyles.departmentCount}>{countEmployeesByDepartment(item.employees)}</Text>
      </View>
    </View>
  );

  return (
    <View style={resultStyles.container}>
      <Text style={resultStyles.title}>Cantidad de Empleados por Departamento</Text>
      <BarChart
        data={data}
        width={350}
        height={350}
        yAxisSuffix=""
        yAxisInterval={0}
        fromZero
        chartConfig={{
          backgroundColor: '#e26a00',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          barPercentage: 1,
        }}
      />
      <View style={resultStyles.listContainer}>
        <View >

        </View>
        <View >

        </View>
        <FlatList
          data={departments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View />}
        />
      </View>

      <View style={resultStyles.buttonContainer}>
        <TouchableOpacity
          style={resultStyles.button}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={resultStyles.textButton}>Regresar al Inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResultsScreen;
