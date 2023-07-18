function skillsMember(){
    return{
        restrict: 'E',
        templetUrl:'modules/skills/view/member.html',
        controller : 'SkillsMemberController',
        controllerAs : 'vm',
        bindToController: 'true',
        scope:{
            member:'='
        }
    };
}