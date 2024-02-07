# Elemental
  El proyecto *elemental* consiste en la presentación de dos conjuntos de símbolos utilizados para representar a los 4 elementos: Aire, tierra, fuego y agua. En este caso utilice las runas alquímicas de los elementos, y los escudos ficticios utilizados para representar a las naciones de los elementos en [*"Avatar: the last airbender"*](https://es.wikipedia.org/wiki/Avatar:_la_leyenda_de_Aang). Estos símbolos están ubicado en 4 puntos del cuerpo y su cambio con la respectiva contraparte se puede observar cuando la persona se mueve verticalmente en la pantalla. Para hacer el uso un poco más cómodo los puntos elegido están ubicados en la parte superior del cuerpo, por lo que el usuario podrá utilizar el modelo sentado y el modelo tenga funcionalidad total.
  
  Para realizar este proyecto utilice el modelo *PoseNet* de la librería *Machine Learnign* de *ml5*, el cual reconoce diferentes puntos del cuerpo del usuario que se encuentre frente a la cámara web. Las runas y escudos utilizados los dibuje en ibisPaint como png para poder colocarlos sobre 4 puntos específicos a elección: en este caso los hombros y las orejas; esto se logró modificando el sketch y aplicando parámetros en las coordenadas para que el cambio se realice con el movimiento de la persona frente a la cámara. 
