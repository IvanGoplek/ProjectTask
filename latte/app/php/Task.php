<?php
/**
 * Stub generated by xlatte
 */
class Task extends taskBase{

    /**
     * @remote
     * @param number $idcategory
     * @return Task[]
     */
    public static function byIdCategory($idcategory){
        return DL::arrayOf('Task',"
            SELECT *
            FROM task
            WHERE idcategory = '$idcategory'
        ");
    }

    /**
     * @remote
     * @return Task[]
     */
    public static function catalog(){
        return DL::arrayOf('Task',"
            SELECT *
            FROM task
        ");
    }

    /**
     * Override.
     * @return bool
     */
    public function canDelete(){
        return true;
    }
}