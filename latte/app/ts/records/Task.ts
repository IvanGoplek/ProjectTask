/**
 * Generated by xlatte
 */
module latte{

    /**
     * Record for table task
     */
    export class Task extends taskBase{

        //region Static
        //endregion

        //region Fields
        //endregion

        //region Private Methods
        //endregion

        //region Methods
        /**
         * Gets the metadata about the record task
         *
         * @returns Object
         */
        getMetadata(): IRecordMeta {
            return {
                fields: {
                    title: {
                        text: strings.title,
                        type: 'string'
                    },
                    description: {
                        text: strings.description,
                        type: 'string'
                    },
                    done:{
                        text: strings.done,
                        type: 'boolean'
                    }
                }
            }
        }
        //endregion

        //region Events
        //endregion

        //region Properties
        //endregion

    }
}