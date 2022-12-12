var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope){
    $scope.calcularTarifa = function(){
        var valor = 0
        var descuento = 0
        if($scope.distancia>0 && $scope.distancia<=300){
            valor = 250
        }else if($scope.distancia>300 && $scope.distancia<=1000){
            valor = 250 +(($scope.distancia-300)*30)
        }else if($scope.distancia>1000){
            valor = 250(($scope.distancia -300)*30)+(($scope.distancia-1000)*20)
        }
        $scope.calculartarifa=valor
            if(valor > 500){
                descuento = valor *0.1;
            }else {
                descuento = 0;
            }
            $scope.descuento = descuento
            $scope.total=valor-descuento
    }
});
